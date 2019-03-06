;(function() {
    $(document).ready(() => {
        sliceText();
        fillGridCards();
        initializeListeners();
        initializeCarousel();
    });
    
    
    function sliceText() {
        $('.mdl-card__supporting-text>p').each((idx, value) => {
            const 
                text = $.trim($(value).text()),
                afterSlicedText = '...',
                countSlicedCharacters = 89;
    
            if(text.length > countSlicedCharacters){ 
                const textSliced = $.trim(text.substr(0, countSlicedCharacters));
                $(value).text(textSliced).append(afterSlicedText);
            }
        });
    }
    
    function fillGridCards() {
        const card = $('.mdl-card');
        new Array(9).fill(0).map((value, idx) => { card.clone().attr('id', 'card' + (idx + 2)).appendTo('.mdl-grid') });
    }
    
    function initializeListeners() {    
        $('.mdl-card').on('click', (event) => {
            switch(event.target.parentNode.className) {
                case 'mdl-card__panel-user': {
                    alert(`Clicked on userName card that has id ${event.currentTarget.id}`);
                    break;
                }
                case 'mdl-card__panel-like': {
                    alert(`Clicked on like card that has id ${event.currentTarget.id}`);
                    break;
                }
                case 'mdl-card__title': {
                    alert(`Clicked on label card that has id ${event.currentTarget.id}`);
                    break;
                }
            }
            
        });
    }
    
    function initializeCarousel() {
        const cards = $('.mdl-card');
        cards.clone().appendTo('#carousel');
    
        const carousel = $("#carousel");
        $('#carousel-prev').click(() => {
            carousel.trigger('owl.prev');
            return false;
        });
    
        $('#carousel-next').click(() => {
            carousel.trigger('owl.next');
            return false;
        });
    
        carousel.owlCarousel({
            items: 5,
            autoWidth: true,
            loop: false,
            margin: 0,
            lazyLoad: true,
            lazyLoadEager: 5,
            itemsDesktop: [1400, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [600, 2]
        });
    }
})();
