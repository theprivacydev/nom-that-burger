$( document ).ready(function() {
    $('.devour-btn').on('click', (event) => {
        let id = $(this).data('id');

        let burgerStatus = {
            devoured: true
        }
        console.log('right after click burger status is: ', burgerStatus);

        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function() {
                console.log('burger status is: ', burgerStatus)
                location.reload();
            }
        // End ajax
        );
    // End devour-btn event listener
    });

    $('.make-burger-btn').on('click', (event) => {
        event.preventDefault();
        let madeBurger = {
            burger_name: $('#input-burger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers/', {
            type: 'POST',
            data: madeBurger
        }).then(
            function() {
                location.reload();
            }
         // End ajax
        );
    // End make-burger-btn event listener
    });

// End containing function
});