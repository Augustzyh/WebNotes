
    $("#wrap").click(() => {
        $.post('http://localhost:3001/postData',
            {
                name: "hang",
                age: 18
            },(msg) => {
                console.log(msg);
            }
        );
    })