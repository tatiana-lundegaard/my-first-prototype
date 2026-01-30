We have a shared basic and functional prototype. The prototype is just a simple HTML page. What I already have is a Git repository (both locally and on GitHub), connection and publication of the page via Netlify, and the overall plan. I want to expand the prototype into an application that will emulate a small client zone. I want the application to be written in JavaScript, use my existing infrastructure with Netlify, and have the following parameters.

The URL of our prototype is: https://tatiana-prototype.netlify.app/

Design inspiration:
- Styling and colors: https://lnd-poj.netlify.app/ (JerryPoj by Lundegaard)
- Car insurance flow/UX: https://sjednat.generaliceska.cz/pojisteni-vozidel/uvod/ (Generali Česká pojišťovna – pojištění vozidel)

**Design inspiration:** Styling/colors → [lnd-poj.netlify.app](https://lnd-poj.netlify.app/) (JerryPoj). Flow/UX → [Generali – pojištění vozidel](https://sjednat.generaliceska.cz/pojisteni-vozidel/uvod/).

**Regulation (CZ):** **CNB** (Česká národní banka) supervises insurers. **ČKP** (Česká kancelář pojistitelů) runs MTPL (povinné ručení): guarantee fund, vehicle DB, border insurance. [CNB](https://cnb.cz/en/supervision-financial-market/conduct-of-supervision/status-of-supervision/supervision-of-the-insurance-industry/index.html) | [ČKP](https://www.ckp.cz/)

**For the prototype:** MTPL is compulsory for vehicle operators. Pre-contract info and conduct of business follow EU IDD (Act 170/2018). **GDPR** applies to login and form data. **IPID** is the short pre-sale info document (plain language, ~2 pages) to show before contract.

---

**Feature requirements:**
- Basic login and hiding from the public
- Multi-step form with basic validations
- Use of camera for file upload
- Option to view contract in lightweight KZ
- Styling and colors inspired by Lunde-poj
- Car insurance prototype (B2C)
