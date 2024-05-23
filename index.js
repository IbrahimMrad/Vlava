fetch('https://vlavaapi-4da1.onrender.com/services')
    .then(response => response.json())
    .then(services => {
        var services_row = document.getElementById("services_row");
        services.forEach(service => {
            var _div = document.createElement('div');
            var _current_content = `<div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">${service.title}</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>`;
            _div.innerHTML = _current_content;
            _div.className = 'col-lg-4 col-md-6 icon-box';
            services_row.appendChild(_div);
        });
    })