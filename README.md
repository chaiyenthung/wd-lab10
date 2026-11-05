# COS10005 - Web Development

**Author:** Chai Yen Thung  
**Unit:** COS10005 Web Development  

---

##  Project Overview
This repository contains laboratory exercises focusing on client-side web development techniques, including form creation, CSS Flexbox styling, DOM manipulation, client-side data validation, and interactive animations with jQuery.

---

###  Lab 10: Form Enhancement & Validation with jQuery
- **Directory:** `lab10/` (or repository root)
- **File:** [regform2.html](regform2.html)
- **Features:**
  - Modern form interactions powered by **jQuery v3.5.1**.
  - **Expand/Collapse Sections:** Implemented interactive `slideToggle()` triggers on Section A and Section B to dynamically hide/reveal fieldsets.
  - **Custom Modal Pop-up:** Replaced standard alerts with a custom, accessible HTML+CSS modal dialogue window (`modal.css`) dynamically generated via jQuery.
  - Full client-side data checking:
    - User ID presence and email format (`@` presence).
    - Password presence and matching criteria.
    - Name regex check allowing only alphabet characters and spaces (`/^[a-zA-Z ]+$/`).
    - Radio button option selection check.

---

##  Technologies Used
- **HTML5:** Semantic markup, accessible labels, W3C standards-compliant.
- **CSS3:** Flexible box layout (`flex`), transitions, fixed pop-up overlays, media queries.
- **JavaScript (ES6):** Event listening, DOM querying.
- **jQuery:** DOM traversal, sliding animations (`slideToggle`), dynamic DOM injection.

---

## Live Demo / Mercury Server Link
- **Mercury Server (Lab 10):** `https://mercury.swin.edu.au/cos10005/s105025228/lab10/regform2.html#`
