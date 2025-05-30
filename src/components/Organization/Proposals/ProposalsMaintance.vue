<template>
    <div class="col-12">
        <div class="card">
            <Toolbar class="mb-4 p-0" style="background-color: white; border: none;">
                <template #start>
                    <h1>Propuestas</h1>
                </template>
                <template #end></template>
            </Toolbar>


            <DataTable :value="oListPropuestas" paginator :rowHover="true" :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem" :filters="filters"
                filterDisplay="menu">
                <template #header>
                    <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                        <IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Buscar..." />
                        </IconField>
                        <Button label="Nueva Propuesta" icon="pi pi-plus" class="p-button-success ml-2"
                            @click=OpenProposalNew() />
                    </div>
                </template>

                <Column style="text-align: center;" headerStyle="min-width:2rem;">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" @click="EditProposal(slotProps.data.idVoluntariado)" />
                        <Button icon="pi pi-power-off" @click="UpdateStatusProposal(slotProps.data)" />
                    </template>
                </Column>

                <Column field="idVoluntariado" header="#" style="width: 5%"></Column>
                <Column field="tituloPropuesta" header="Titulo" style="width: 25%"></Column>
                <Column field="descripcionPropuesta" header="Descripcion" style="width: 25%"></Column>
                <Column field="direccion" header="Direccion" style="width: 25%"></Column>
                <Column field="status" header="Estado">
                    <template #body="slotProps">
                        <div class="centered-content">
                            <Tag v-if="slotProps.data.estado" value="Activo" severity="success" />
                            <Tag v-if="!slotProps.data.estado" value="Inactivo" severity="danger" />
                        </div>
                    </template>
                </Column>

            </DataTable>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { useRouter } from 'vue-router';
import ProposalsService from '../../../services/ProposalsService';

const oListPropuestas = ref([]);
const router = useRouter();
const filters = ref({
    global: { value: '', matchMode: FilterMatchMode.CONTAINS }
});

//#region Eventos
onMounted(() => {
    Initialize();
    console.log('Propuestas component mounted');
});

//#region Metodos
const Initialize = () => {
    LoadPropuestas();
}

const LoadPropuestas = async () => {
    const idUser = localStorage.getItem('organizationId');
    if (!idUser) {
        console.error('No se encontró idUser en localStorage');
        return;
    }
    else {
        console.log('ID de usuario obtenido:', idUser);
    }
    const response = await ProposalsService.GetProposalsService(idUser);
    console.log('Response from GetProposalsService:', response);
    if (response.status == 200) {
        oListPropuestas.value = response.data;
    }
}

const OpenProposalNew = () => {
    router.push({ path: `/portal/Organizacion/Propuestas/Nuevo` });
}

const EditProposal = (idVoluntariado) => {
    router.push({ path: `/portal/Organizacion/Propuestas/Editar/${idVoluntariado}` });
}

const UpdateStatusProposal = async (proposal) => {
    const request = {
        idVoluntariado: proposal.idVoluntariado,
        estado: !proposal.estado // Alternamos entre activo e inactivo
    };

    console.log('Enviando solicitud para actualizar estado:', request);

    const response = await ProposalsService.UpdateStatusProposalsService(request);

    if (response.status === 200) {
        console.log(`Propuesta ${request.estado ? 'activada' : 'desactivada'} correctamente`);
        LoadPropuestas();
    }
}

</script>

<style scoped></style>