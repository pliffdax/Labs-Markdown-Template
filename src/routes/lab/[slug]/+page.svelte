<script lang="ts">
  import LabView from "$lib/site/LabView.svelte";
  export let data: { lab: { title: string }; Component: any };
</script>

<LabView title={data.lab.title} Component={data.Component} />
