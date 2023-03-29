<template>
    <div class="col">
        <div class="card m-3 text-center bg-brown text-white">
            <img :src="image" :alt="name">
            <div class="card-body">
                <h5>{{ name }}</h5>
                <span>{{ type }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AppCard',
    props: {
        image: String,
        name: String,
        type: String
    }
}
</script>

<style></style>