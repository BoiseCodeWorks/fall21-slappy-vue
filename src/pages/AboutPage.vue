<template>
  <div class="about">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#snek-modal">
      Launch snek modal
    </button>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bird-modal">
      Launch bird modal
    </button>

    <Modal id="snek-modal">
      <template #modal-title>
        <div class="d-flex align-items-center">
          <i class="mdi mdi-snake me-2"></i>
          <h6 class="mb-0">
            This is the snek modal
          </h6>
        </div>
      </template>

      <template #modal-body>
        <div class="bg-grey p-3">
          <h3>SNakes on Planes</h3>
        </div>
      </template>
    </Modal>

    <Modal id="bird-modal">
      <template #modal-title>
        <div class="d-flex align-items-center">
          <i class="mdi mdi-twitter me-2"></i>
        </div>
      </template>

      <template #modal-body>
        <div class="bg-grey p-3">
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
          <i class="mdi mdi-twitter me-2"></i>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
