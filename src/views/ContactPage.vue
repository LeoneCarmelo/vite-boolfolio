<script>
export default {
    name: 'ContactPage'
}
</script>
        
<template>
    <div class="container">
        <div class="row">
            <form action="" method="post" class="py-5 d-flex flex-column">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" name="name" id="name" class="form-control" placeholder="Ex: John Smith" aria-describedby="helpIdname">
                  <small id="helpIdname" class="text-muted">Type your name.</small>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="Ex: john@smith.com" aria-describedby="helpIdemail">
                  <small id="helpIdemail" class="text-muted">Type your Email.</small>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" name="message" id="message" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-dark text-uppercase w-25 align-self-end mt-5 fw-bold">Send</button>
            </form>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>