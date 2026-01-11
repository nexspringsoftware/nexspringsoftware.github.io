# NexSpring Software Website

## Running Locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Adding Your Team Member Page

### Step 1: Create Your HTML File
1. Copy `team/TEMPLATE.html` to `team/your-name.html` (lowercase, hyphens)
2. Update title tag, name, and location

### Step 2: Add Your Profile Picture
1. Save photo as `images/team/your-name.jpg` (square, 600-800px, <200KB)

### Step 3: Add Your Card to Team Page
1. Open `team.html`
2. Add your card in `.team-grid`:
   ```html
   <a href="team/your-name.html" class="team-member-link">
       <div class="team-member">
           <div class="team-member-photo">
               <img src="images/team/your-name.jpg" alt="Your Name">
           </div>
           <div class="team-member-info">
               <h3>Your Name</h3>
               <p class="team-member-location">Your Location</p>
               <p class="team-member-bio">Your brief bio (under 30 words).</p>
           </div>
       </div>
   </a>
   ```

## Photo Requirements

- Square (1:1 aspect ratio)
- 600×600px to 800×800px recommended
- JPG or PNG format
- Under 200KB file size
