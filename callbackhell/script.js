// CALL BACK HELL TASK

// 1.display countown from 10 to 1 on the screen then display Happy Independence Day on the screen

// do not use named function
// do not use set interavel function
// do not use recursion
// do not IIFE & named function
// do not use looping
// use call back hell to deploy the timer

setTimeout(()=>{
    console.log(10);
    setTimeout(()=>{
        console.log(9);
        setTimeout(()=>{
            console.log(8);
            setTimeout(()=>{
                console.log(7);
                setTimeout(()=>{
                    console.log(6);
                    setTimeout(()=>{
                        console.log(5);
                        setTimeout(()=>{
                            console.log(4);
                            setTimeout(()=>{
                                console.log(3);
                                setTimeout(()=>{
                                    console.log(2);
                                    setTimeout(()=>{
                                        console.log("Happy Independence Day");
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)