# Islamic Studies Website
- - -
###### CTEC3905 Front End Web App Development - Assignment 2
###### Zakir Ahmed - P14125980 - Computer Science

# Introduction
This project is a HTML website focussed around a formal study of Islamic Science. This README file aims to explain the motivation behind the subject matter, depict plans and wireframes of the website and detail the process of development, highlighting any major design features or adherance to standards. There will also be a section on some user testing to ensure functionality of components.

## Motivation
Being a student of the Sacred Islamic Sciences, my interest in it's many fields is deeply rooted. The traditional format of study is a 6 year intense course, wherein a number of books are read in great depth throughout the years. On average 6 books are studied each year (and students are recommended to read commentaries on each of these books). The sciences include: Arabic Language, Literature, Grammar, Morphology, Syntax, Eloquence, Poetry, Prose, Jurisprudence, Inheritance Laws, Quranic Exegesis, Prophetic Traditions, Finance and even Home Economics.

I am approaching the end of my 5th year of study. Now preparing for the final year in which 6 books (each on average 5-6 volumes) are read, cover to cover, spanning thousands of pages. This is a unique form of study where the student is being taught every tradition from the teacher (Principal Lecturer) with an ininterupted chain from himself up to the very person who first narrated it some 1400 years ago.

This website aims to draw a little insight into the books which are studied and into the prominent personalities. It's future use could well be adapted to becomming the goto guide for those wishing to join the course, or have a interest in understanding the curriculum.


# Design Documentation
The following links are to pages of the initial and final designs.


[Initial Sketches](documents/initial.md)
[Final Design](documents/final.md)

# Design Principles (PARC)
1. **P** - Proximity - Has been addressed in this website in that the relateed items are group closely together. The best example is seen on the Home Page where accordion sections are seperated though grouped closely together. This forms a visual cue to the user that each of the sections contain individual yet similarly formatted items. In this case, each section contained images of books.
2. **A** - Alignment - In the case of this website, two different lagnuages were used, so this best demostrates the alignment of the design. Firstly, each section and subsection, followed the same format thus creating structure. Nothing looked scattered, but rather matches uniformly. This website has Arabic text which is a right to left language. Upon changing the language from the navigation bar, the entire body of text aligns right, and then left again back to English.
3. **R** - Repetition - Each webpage of this website maintains core design components, namely the header, nav bar, background image, middle content section and footer. This repetition gives confidence to the user, such that they know where everything is located.
4. **C** - Contrast - The webite follows a brown based theme. This is manipulated well throughout the site by varying shades and tints of the colour base. The Modal bar is a dark blue colour which is a direct contrast from the brown in the accordion section and background. This makes the information stand out to the user. Also the main header is white block over a dull background, allowing for the title to be in central focus at all times.

# Design Features
- **Language Toggle** - The primary design feature of this website is the accessbility for Arabic readers. A nav bar item was addded ("Arabic") which changes all text in from English to Arabic. This is especially useful since the primary objective of the website is an Arabic curriculum of study. 
- **Mobile First** - The website was designed observing the Mobile First approach which ensures the best results for a responsive design.
- **Use of API** - An external API was used appropriately to highlight the location (Google Maps) of burial of a prominenet figure mentioned in the ("Scholars") Section.
- **Validated Webpages** - The webapages pass the validation test for HTML with no major errors.
- **Responsive Layout** - This website follows a responsive layout as explained from the Mobile First Approach. This is best represented by the title which reduces in size and readjusts, as well as the nav bar which collapses and hides the menu buttons

# Obstacles
- The biggest obstacle was in having 2 languages which were manually translated. It would not suffice to have an API or JavaScript use Google Translate since the translation wouldn't represent the best or intended meaning. I hard coded both the English and Arabic sections for each line of text. Notwithstanding, adherence to the Right-to-Left format of Arabic.
- This was all also perfomed in a single stylesheet to highlight best use of CSS skills. This is where one class is manipulated without affecting the descendant classes or other groups.

# Testing


| Test Case | Pass/Fail |Details |
|--------|--------|--------|
|     Arabic toggle switch in every page   |    Pass    | Each page successfully changed from English to Arabic and back to English again on click of the navigation button    |
|     Nav Bar collapses at a certain width   |    Pass    | at 700px the navigation bar collapsed, hiding the menu items.   |
|     Nav bar menu items appear fully and function  |    Pass    | Navigation bar items apeear on click of ("Menu") button when at a lower (>700px) screen width. Each button worked in both English and Arabic |
|     Accordion sections open up   |    Pass    | The accordion boxes open and close, with the icon changing from Plus to Minus.    |
|     Modal box appears upon clicking the book image   |    Pass    | The modal box appears on click of the images within the accordion.  |





# JavaScript
The javascript shows usage of the scroll feature with a set top height. This allows the header to remain fixed until scrolled and then dispearring on scroll, whilst fixing the nav bar to the top at all times.
```
$(window).scroll(function() {
    if($(window).scrollTop() >=
        300) {
        $('nav').addClass(
            'fixed-header');
    } else {
        $('nav').removeClass(
            'fixed-header');
    }
});
```

---
# References

- [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js) - Used mainly for the language toggler;
- [Font Awesom](https://use.fontawesome.com/ed2ca076ee.js) - Used for the social media icons in the footer;
- [Google Maps API](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwj1_4LI_-7SAhUlBMAKHRzuAn8QjBAIKTAB&url=https%3A%2F%2Fdevelopers.google.com%2Fmaps%2Fdocumentation%2Fjavascript%2F&usg=AFQjCNEqIyefKNWh844ThzcpqpQ_DzQTCw&sig2=opJ1uPAx8kYBLsxXiOhOiA&bvm=bv.150729734,bs.2,d.ZGg) - Used in the 'Scholars' section to highlight a location;
- [W3Schools](https://www.w3schools.com/) - Assistance throughout aswell and inspiration;
- [Dave and Fania's Lectures]() - Ideas, context and limits;
