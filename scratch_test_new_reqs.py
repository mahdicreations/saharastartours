import asyncio
from playwright.async_api import async_playwright

test_script = """
async () => {
    // 1. Update top bar text & social icons
    const badge = document.querySelector('.top-bar-badge');
    if (badge) {
        badge.innerHTML = '<i class="fa-solid fa-compass"></i> Licensed Morocco Tour Operator &bull; Authentic Desert Safaris';
    }
    const socials = document.querySelector('.top-bar-socials');
    if (socials) {
        socials.innerHTML = `
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener" aria-label="TripAdvisor" title="TripAdvisor">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block;vertical-align:middle;">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.2c1.78 0 3.25.96 4.02 2.38.77-1.42 2.24-2.38 4.02-2.38 2.45 0 4.44 1.99 4.44 4.44 0 2.45-1.99 4.44-4.44 4.44-1.28 0-2.43-.54-3.24-1.41l-.78 1.19-.78-1.19c-.81.87-1.96 1.41-3.24 1.41-2.45 0-4.44-1.99-4.44-4.44 0-2.45 1.99-4.44 4.44-4.44zm-4.02 6.84c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4zm8.04 0c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4z"/>
                </svg>
            </a>
        `;
    }

    // 2. Add language switcher CSS & HTML
    const style = document.createElement('style');
    style.innerHTML = `
        .lang-flags-wrap {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(232, 195, 158, 0.18);
            border-radius: 30px;
            padding: 3px 5px;
        }
        .lang-flag-btn {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: transparent;
            border: none;
            padding: 4px 8px;
            border-radius: 20px;
            cursor: pointer;
            color: var(--text-muted);
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.25s ease;
        }
        .lang-flag-btn:hover {
            color: var(--sand-gold);
            background: rgba(255, 255, 255, 0.06);
        }
        .lang-flag-btn.active {
            background: rgba(217, 107, 67, 0.2);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(217, 107, 67, 0.3);
        }
        .lang-flag-svg {
            width: 17px;
            height: 12px;
            border-radius: 2px;
            object-fit: cover;
            display: inline-block;
            box-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
        .mobile-only { display: none !important; }
        .desktop-only { display: inline-flex !important; }

        @media (max-width: 768px) {
            .desktop-only { display: none !important; }
            .mobile-only { display: inline-flex !important; }
            #nav-cta { display: none !important; }
            .lang-flags-wrap.mobile-only {
                margin-left: auto;
                margin-right: 12px;
                padding: 2px 4px;
                gap: 2px;
            }
            .lang-flags-wrap.mobile-only .lang-flag-btn {
                padding: 4px 6px;
                font-size: 0.68rem;
                gap: 3px;
            }
            .mobile-menu-cta {
                width: 100% !important;
                margin-top: 15px;
                padding: 14px 20px !important;
                font-size: 1.05rem !important;
                border-radius: 30px !important;
            }
            .top-bar-badge {
                font-size: 0.68rem !important;
            }
        }

        /* --- REDESIGNED FOOTER --- */
        .footer-socials {
            display: flex;
            gap: 12px;
            margin-top: 15px;
        }
        .footer-socials .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(232, 195, 158, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .footer-socials .social-link:hover {
            background: linear-gradient(135deg, var(--terracotta) 0%, hsl(14, 75%, 45%) 100%);
            border-color: var(--terracotta);
            color: #ffffff;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px var(--terracotta-glow);
        }
        .footer-payments-bar {
            max-width: 1400px;
            margin: 0 auto 35px;
            padding: 22px 28px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(232, 195, 158, 0.12);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }
        .payments-title {
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 0.92rem;
            font-weight: 600;
            color: var(--sand-gold);
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        .payments-icons {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
        }
        .pay-badge {
            font-size: 2rem;
            color: #8b8076;
            transition: all 0.25s ease;
            display: inline-flex;
            align-items: center;
        }
        .pay-badge:hover {
            color: var(--sand-gold);
            transform: translateY(-2px);
        }
        .payments-guarantee {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            color: var(--text-muted);
        }
        .payments-guarantee i {
            color: #25D366;
            font-size: 0.95rem;
        }
        @media (max-width: 768px) {
            .footer-payments-bar {
                flex-direction: column;
                text-align: center;
                gap: 15px;
                padding: 20px;
            }
            .payments-icons {
                justify-content: center;
                gap: 14px;
            }
            .pay-badge {
                font-size: 1.7rem;
            }
        }
    `;
    document.head.appendChild(style);

    // 3. Insert Language Flags in Navbar
    const flagsHtml = `
        <div class="lang-flags-wrap desktop-only">
            <button type="button" class="lang-flag-btn active" title="English">
                <svg class="lang-flag-svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 288 216 153v39H584L368 320h56zm-208-96L0 39V0h56l216 152h-56zm264-192h160v114L480 0zm-360 0L0 86V0h120zm0 480L0 394v86h120zm400 0h120v-86L520 480z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>
                <span>ENG</span>
            </button>
            <button type="button" class="lang-flag-btn" title="Español">
                <svg class="lang-flag-svg" viewBox="0 0 750 500"><path fill="#c60b1e" d="M0 0h750v500H0z"/><path fill="#ffc400" d="M0 125h750v250H0z"/></svg>
                <span>ESP</span>
            </button>
            <button type="button" class="lang-flag-btn" title="Italiano">
                <svg class="lang-flag-svg" viewBox="0 0 1500 1000"><path fill="#009246" d="M0 0h500v1000H0z"/><path fill="#fff" d="M500 0h500v1000H500z"/><path fill="#ce2b37" d="M1000 0h500v1000h-500z"/></svg>
                <span>ITA</span>
            </button>
        </div>
    `;
    const flagsMobileHtml = flagsHtml.replace('desktop-only', 'mobile-only');

    const navCta = document.querySelector('#nav-cta');
    if (navCta) {
        navCta.classList.add('desktop-only');
        navCta.insertAdjacentHTML('beforebegin', flagsHtml);
        navCta.insertAdjacentHTML('beforebegin', flagsMobileHtml);
    }

    // 4. Add Plan a Trip inside Mobile Menu
    const navLinks = document.querySelector('#nav-links');
    if (navLinks) {
        navLinks.insertAdjacentHTML('beforeend', `
            <li class="mobile-cta-li" style="width:100%;">
                <a href="#planner" class="btn btn-primary mobile-menu-cta"><i class="fa-solid fa-compass" style="margin-right:8px;"></i> Plan a Trip</a>
            </li>
        `);
    }

    // 5. Update Footer Socials & Add Payment Bar
    const footerSocials = document.querySelector('.footer-socials');
    if (footerSocials) {
        footerSocials.innerHTML = `
            <a href="https://facebook.com" class="social-link" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" class="social-link" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://tiktok.com" class="social-link" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://tripadvisor.com" class="social-link" target="_blank" rel="noopener" aria-label="TripAdvisor" title="TripAdvisor">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3.2c1.78 0 3.25.96 4.02 2.38.77-1.42 2.24-2.38 4.02-2.38 2.45 0 4.44 1.99 4.44 4.44 0 2.45-1.99 4.44-4.44 4.44-1.28 0-2.43-.54-3.24-1.41l-.78 1.19-.78-1.19c-.81.87-1.96 1.41-3.24 1.41-2.45 0-4.44-1.99-4.44-4.44 0-2.45 1.99-4.44 4.44-4.44zm-4.02 6.84c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4zm8.04 0c1.33 0 2.4-1.07 2.4-2.4s-1.07-2.4-2.4-2.4-2.4 1.07-2.4 2.4 1.07 2.4 2.4 2.4z"/>
                </svg>
            </a>
        `;
    }

    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        const paymentsHtml = `
            <div class="footer-payments-bar">
                <div class="payments-title">
                    <i class="fa-solid fa-lock"></i> 100% Secure Bookings
                </div>
                <div class="payments-icons">
                    <span class="pay-badge" title="Visa"><i class="fa-brands fa-cc-visa"></i></span>
                    <span class="pay-badge" title="Mastercard"><i class="fa-brands fa-cc-mastercard"></i></span>
                    <span class="pay-badge" title="PayPal"><i class="fa-brands fa-cc-paypal"></i></span>
                    <span class="pay-badge" title="American Express"><i class="fa-brands fa-cc-amex"></i></span>
                    <span class="pay-badge" title="Apple Pay"><i class="fa-brands fa-cc-apple-pay"></i></span>
                    <span class="pay-badge" title="Bank Wire Transfer"><i class="fa-solid fa-building-columns"></i></span>
                </div>
                <div class="payments-guarantee">
                    <i class="fa-solid fa-shield-halved"></i> 256-Bit SSL Encrypted
                </div>
            </div>
        `;
        footerBottom.insertAdjacentHTML('beforebegin', paymentsHtml);
    }
}
"""

async def run():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        
        # Test on Desktop (1440x900)
        page_d = await b.new_page(viewport={'width': 1440, 'height': 900})
        await page_d.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await page_d.evaluate(test_script)
        await page_d.wait_for_timeout(1000)
        await page_d.screenshot(path="test_req_desktop_header.png")
        
        # Scroll to footer
        footer = await page_d.query_selector('footer')
        if footer:
            await footer.scroll_into_view_if_needed()
            await page_d.wait_for_timeout(500)
            await footer.screenshot(path="test_req_desktop_footer.png")

        # Test on Mobile (390x844)
        page_m = await b.new_page(viewport={'width': 390, 'height': 844})
        await page_m.goto("http://localhost:8080/index.html", wait_until="networkidle")
        await page_m.evaluate(test_script)
        await page_m.wait_for_timeout(1000)
        await page_m.screenshot(path="test_req_mobile_header.png")
        
        # Open mobile menu to test Plan a Trip button inside it
        toggle = await page_m.query_selector('#mobile-toggle')
        if toggle:
            await toggle.click()
            await page_m.wait_for_timeout(500)
            await page_m.screenshot(path="test_req_mobile_menu_open.png")

        await b.close()

asyncio.run(run())
