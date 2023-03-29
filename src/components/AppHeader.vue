<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://ygoprodeck.com/cdn-cgi/image/width=140/https://images.ygoprodeck.com/images/assets/ygoprodeck_header_logo.png?v=1.13"
                    alt="Logo" class="d-inline-block align-text-top me-3">
                {{ title }}
            </a>
            <select name="" id="" class="ms-auto">
                <option value="">Alien</option>
            </select>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'AppHeader',
    props: {
        title: String
    }
}

</script>


<style></style>