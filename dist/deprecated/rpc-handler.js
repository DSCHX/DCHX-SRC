DC_OX.webpack.findModuleProps(["SET_ACTIVITY"]).SET_ACTIVITY.handler({
        isSocketConnected: () => true,
        socket: {
            id: 100,
            application: {
                id: appid,
                name: acname,
            },
            transport: "ipc",
        },
        args: {
            pid: 10,
            activity: aactivity,
        },
    });
