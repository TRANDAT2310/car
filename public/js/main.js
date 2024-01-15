document.addEventListener('DOMContentLoaded', function () {
    var car1 = document.getElementById('car');
    var car2 = document.getElementById('car-top');

    var carSpeed = 10; // Tốc độ di chuyển của xe dưới
    var carTopSpeed = 20; // Tốc độ di chuyển của xe trên

    function moveCars() {
        var carPosition = parseFloat(getComputedStyle(car1).left);
        var carTopPosition = parseFloat(getComputedStyle(car2).left);

        car1.style.left = carPosition + carSpeed + 'px';
        car2.style.left = carTopPosition + carTopSpeed + 'px';

        // Kiểm tra nếu xe ra khỏi khung, đặt lại vị trí
        if (carPosition > window.innerWidth) {
            car1.style.left = '-300px';
        }

        if (carTopPosition > window.innerWidth) {
            car2.style.left = '-300px';
        }

            // Kiểm tra nếu xe chạm đích (ví dụ: left = 80% của window.innerWidth)
            var destination = window.innerWidth * 0.73;
            if (carPosition >= destination || carTopPosition >= destination) {
                // Thực hiện hiệu ứng hoàn thành ở đây
                showCompletionMessage(carPosition >= destination ? 'REDCAR' : 'YELLOWCAR');

                // Reset vị trí của xe
                car1.style.left = '0%';
                car2.style.left = '0%';
            }
        }

        // Lặp vô hạn để di chuyển xe
        setInterval(moveCars, 50);

        // Bắt sự kiện nhấn phím
        document.addEventListener('keydown', function (event) {
            if (event.key === 'D') {
                carSpeed = 20; // Di chuyển xe dưới về phải
            } else if (event.key === 'G') {
                carTopSpeed = 10; // Di chuyển xe trên về phải
            }
        });

        // Bắt sự kiện thả phím
        document.addEventListener('keyup', function (event) {
            if (event.key === 'D') {
                carSpeed = 5; // Dừng xe dưới khi không nhấn phím
            } else if (event.key === 'G') {
                carTopSpeed = 5; // Dừng xe trên khi không nhấn phím
            }
        });
        

        function showCompletionMessage(car) {
            // Thực hiện hiệu ứng hoàn thành tùy ý, ví dụ:
            alert(car + ' victory!');
        }
    });
