        const textElement = document.getElementById('typing-text');
        const textToType = "Art Direction & Filmmaking";
        let index = 0;

        function typeEffect() {
            if (index < textToType.length) {
                textElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }


        window.onload = () => {
            setTimeout(typeEffect, 800);
        };

        function openMedia(type, content, title, desc) {
            const modal = document.getElementById('mainModal');
            const display = document.getElementById('mediaDisplay');
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerText = desc || "";

            let html = "";
            if (type === 'vimeo') {
                html = `<div style="position:relative;padding-bottom:56.25%;height:0;"><iframe src="https://player.vimeo.com/video/${content}?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;
            } else if (type === 'gallery') {
                html = '<div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:15px;">' +
                    content.map(img => `<img src="${img}" style="width:100%; aspect-ratio:4/5; object-fit:cover; border:1px solid rgba(255,255,255,0.1)">`).join('') +
                    '</div>';
            }

            display.innerHTML = html;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeMedia() {
            document.getElementById('mainModal').style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('mediaDisplay').innerHTML = '';
        }
        window.onkeydown = function (e) { if (e.key === "Escape") closeMedia(); }