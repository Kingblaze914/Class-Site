var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            var entrySquare = entry.target.querySelector('.square');

            if (!getCurrentAnimationPreference()) {
                return;
            }

            if (entry.isIntersecting) {
                entrySquare.classList.add('square-transition');
                return;
            }

            entrySquare.classList.remove('square-transition');
        });
        });

        observer.observe(squareWrapper);
    })();
