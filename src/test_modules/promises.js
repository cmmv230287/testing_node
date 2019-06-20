module.exports = {
    process1: function(duration, fail){
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(fail){
                    return rej("process1 termino con error")
                }
                res("process1 termino");
            }, duration);
        });
    },
    process2: function(duration, fail){
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(fail){
                    return rej("process1 termino con error")
                }
                res("process2 termino");
            }, duration);
        });
    },
    process3: function(duration, fail){
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(fail){
                    return rej("process1 termino con error")
                }
                res("process3 termino");
            }, duration);
        });
    },
    process4: function(duration, fail){
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(fail){
                    return rej("process1 termino con error")
                }
                res("process4 termino");
            }, duration);
        });
    }
}