<template>
    <div class="col-md-3 users-list">
        <ul class="list-group">
            <div class="list-group-item" v-for="user in groupUsers">
                <img src="https://s-media-cache-ak0.pinimg.com/564x/5c/c6/d9/5cc6d9872253e554e2c56fb80581753c.jpg"  />{{ user.name }}
            </div>
        </ul>
    </div>
</template>

<script>

module.exports = {

    name: 'usersList',

    props: ['groupUsers']

}

</script>

<style lang="less" scoped>
    .users-list {
        padding-left: 0;
        padding-right: 0;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;

        .list-group {

            .list-group-item {

                border-left: none;
                border-right: none;
                border-radius: 0;

                img {
                    height: 30px;
                    border-radius: 50%;
                    border: 1px solid #ddd;
                    margin: 5px;
                    padding: 2px;
                }
            }
        }
    }
</style>
