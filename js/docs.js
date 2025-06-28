// Documentation page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to command blocks
    const commandBlocks = document.querySelectorAll('.command-block');
    
    commandBlocks.forEach(block => {
        const code = block.querySelector('code');
        if (code) {
            const header = document.createElement('div');
            header.className = 'command-header';
            header.innerHTML = `
                <span>Terminal Command</span>
                <button class="copy-btn" onclick="copyToClipboard(this, '${encodeURIComponent(code.textContent)}')">
                    Copy
                </button>
            `;
            block.insertBefore(header, block.firstChild);
        }
    });
});

// Copy to clipboard functionality
function copyToClipboard(button, encodedText) {
    const text = decodeURIComponent(encodedText);
    
    if (navigator.clipboard && window.isSecureContext) {
        // Use the modern clipboard API
        navigator.clipboard.writeText(text).then(() => {
            showCopySuccess(button);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(text, button);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text, button);
    }
}

function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add tooltip functionality
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', function() {
        // Tooltip functionality is handled by CSS
    });
}); 