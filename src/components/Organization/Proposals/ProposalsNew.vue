<template>
    <div class="col-12">
        <div class="card shadow-lg rounded-lg p-6 bg-white">
            <Toolbar class="mb-6 p-0 border-0 bg-white">
                <template #start>
                    <h1 class="text-2xl font-bold text-gray-800">Nueva Propuesta</h1>
                </template>
                <template #end></template>
            </Toolbar>

            <div class="flex flex-col gap-6">
                <div class="p-fluid p-formgrid grid gap-4">
                    <div class="field col-12 md:col-4">
                        <FloatLabel>
                            <InputText id="txtTitle" v-model="oPropuestas.tituloPropuesta" class="w-full" />
                            <label for="lblTitle">Titulo</label>
                        </FloatLabel>
                    </div>
                    <div class="field col-12 md:col-4">
                        <FloatLabel>
                            <Textarea id="txtDescription" rows="2" cols="30"
                                v-model="oPropuestas.descripcionPropuesta" class="w-full" />
                            <label for="lblDescription">Descripcion</label>
                        </FloatLabel>
                    </div>
                    <div class="field col-12 md:col-4">
                        <FloatLabel>
                            <Textarea id="txtDirection" rows="2" cols="30" v-model="oPropuestas.direccion" class="w-full" />
                            <label for="lblDirection">Direccion</label>
                        </FloatLabel>
                    </div>
                    <div class="field col-12 md:col-4">
                        <FloatLabel>
                            <!-- <Calendar id="txtInitDate" v-model="fechaInicio" showTime hourFormat="24" />
                            <label for="lblInitDate">Fecha Inicio</label> -->
                            <InputText id="txtInitDate" v-model="oPropuestas.fechaInicio" class="w-full" />
                            <label for="lblInitDate">Fecha Inicio</label>
                        </FloatLabel>
                    </div>
                    <div class="field col-12 md:col-8">
                        <FloatLabel>
                            <InputText id="txtFinalDate" v-model="oPropuestas.fechaFinal" class="w-full" />
                            <label for="lblFinalDate">Fecha Final</label>
                        </FloatLabel>
                    </div>
                </div>
            </div>

            <Divider layout="horizontal" class="my-6" />

            <Toolbar class="mb-6 p-0 border-0 bg-white">
                <template #start>
                    <h1 class="text-2xl font-bold text-gray-800">Requisitos</h1>
                </template>
                <template #end></template>
            </Toolbar>

            <div class="flex flex-col gap-6">
                <div class="p-fluid p-formgrid grid gap-4">
                    <div class="field col-12 md:col-4">
                        <FloatLabel>
                            <Textarea id="txtDescriptionRequirements" rows="2" cols="30"
                                v-model="oPropuestas.descripcionRequisito" class="w-full" />
                            <label for="lblDescriptionRequirements">Descripcion</label>
                        </FloatLabel>
                    </div>
                </div>
            </div>

            <Divider layout="horizontal" class="my-6" />

            <div class="flex justify-start gap-4 mt-4">
                <Button label="Guardar" icon="pi pi-save" severity="primary" iconPos="right" @click="SaveProposals" class="px-6 py-2" />
                <Button label="Atrás" icon="pi pi-arrow-left" class="ml-2 px-6 py-2" severity="secondary" @click="BackTo" />
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ProposalsService from '../../../services/ProposalsService';

const route = useRoute();
const router = useRouter();

const oPropuestas = ref({
    idVoluntariado: 0,
    estado: 'true'
});

const fechaInicio = ref(null);

onMounted(() => {
    Initialize();
});

const Initialize = () => {
    const idVoluntariado = route.params.id;

    if (!idVoluntariado || idVoluntariado === "null") {
        console.log("Creando nueva propuesta, no se cargan datos.");
        return;
    }

    LoadPropuestasDetalle(idVoluntariado);
};


const BackTo = () => {
    router.push('/portal/Organizacion/Propuestas');
}

const LoadPropuestasDetalle = async (idVoluntariado) => {
    const response = await ProposalsService.GetProposalsDetailService(idVoluntariado);
    console.log('Response from GetProposalsDetailService:', response);
    if (response.status == 200) {
        console.log('Propuestas loaded successfully:', response.data);
        oPropuestas.value = response.data[0];
        //fechaInicio.value = new Date(response.data[0].fechaInicio); // Convertimos a Date → falta revisar esta parte
    }
    // if (response.status === 200 && Array.isArray(response.data) && response.data.length > 0) {
    //     console.log('Datos obtenidos:', response.data);
    //     oPropuestas.value = response.data[0]; // Tomamos el primer elemento del array
    // }
}

const SaveProposals = async () => {
    const idVoluntariado = oPropuestas.value.idVoluntariado; // Extraer el id correctamente

    if (!idVoluntariado || idVoluntariado === 0) {
        await CreateProposals();
    } else {
        await UpdateProposals();
    }
};


const UpdateProposals = async () => {

    const { ...model } = oPropuestas.value;

    const request = {
        ...model
    };

    console.log('Request to UpdateProposalsService:', request);

    const response = await ProposalsService.UpdateProposalsDetailService(request);
    console.log('Response from UpdateProposalsService:', response);
    if (response.status == 200) {
        console.log('Propuesta updated successfully:', response.data);
        router.push('/portal/Organizacion/Propuestas');
    } else {
        console.error('Error updating propuesta:', response);
    }
}

const CreateProposals = async () => {
    const idOrganizacion = localStorage.getItem('organizationId'); // Obtener ID almacenado

    if (!idOrganizacion) {
        console.error('Error: No se encontró idOrganizacion en localStorage.');
        return;
    }

    const { idVoluntariado, ...model } = oPropuestas.value; // Excluir idVoluntariado si no es necesario

    const request = {
        idOrganizacion, // API requiere este campo
        ...model
    };

    console.log('Request to CreateProposalsService:', request);

    const response = await ProposalsService.CreateProposalsService(request);
    console.log('Response from CreateProposalsService:', response);
    if (response.status == 200) {
        console.log('Propuesta created successfully:', response.data);
        router.push('/portal/Organizacion/Propuestas');
    } else {
        console.error('Error creating propuesta:', response);
    }
}

</script>

<style scoped>
.p-inputnumber .p-inputtext {
    text-align: left;
}
</style>