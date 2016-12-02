<template>
    <div v-bind:class="{ 'pull-right' : fromMe, 'pull-left' : !fromMe }" class="message">
        <span v-show="!fromMe">{{ message.from }}</span>
        <p>
            {{ message.message }}
        </p>
    </div>
</template>

<script>

module.exports = {

    name: 'message',

    props: ['message', 'user'],

    data() {
        return {
             fromMe: this.user.id === this.message.fromId
        }
    }

}

</script>

<style lang="less" scoped>

    .message {
        background: #bffc9d;
        box-shadow: 0 0 2px #5c8650;
        border-radius: 4px;
        padding: 5px 10px 5px 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        max-width: 300px;
        clear: both;

        span {
            font-weight: 600;
            font-size: 14px;
        }

        p {
            margin: 0;
            word-wrap: break-word;
            word-break: normal;
        }
    }

</style>
