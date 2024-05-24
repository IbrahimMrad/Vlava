fetch('https://vlavaapi-4da1.onrender.com/services')
    .then(response => response.json())
    .then(services => {
        var services_row = document.getElementById('services_row');
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

var _happy_clients = [
    { name: 'Ahmad', image: 'gggggggghhhhh' },
    { name: 'Sandra', image: 'gggggggghhhhh' }
];

const happy_clients_div = document.getElementById('happy_clients_div');
_happy_clients.forEach(client => {
    var _div = document.createElement('div');
    _div.className = 'swiper-slide';
    _div.innerHTML = `<div class="testimonial-item">
            <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
            <h3>${client.name}</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
        </div>`;
    happy_clients_div.appendChild(_div);
});