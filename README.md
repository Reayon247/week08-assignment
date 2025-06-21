# Week 8 assignment - Minecraft world log

- Wireframe and supabase tables are all in the Screenshots file
- website url - https://reayon-minecraft-world-log.vercel.app/

## What worked well

- This is definitely my favourite project so far, I love what I've done with this. I will be using this for as long as I play minecraft, its been great having a look at previous worlds while doing this assignment
- Posts are displayed on the page and are sorted by singleplayer or multiplayer. They can also be sorted by date.
- The blog posts and comments table are linked via a foreign key
- There is a delete button for every comment submitted
- users can comment on individual posts
- I added a redirect that works, however i commented it out as I found no real use for it on this project, but to show I know how to use it I've left it there for you to see
- I love my styling for the app and I believe its really intuitive

## Even Better if

- I was thinking of doing the update but it did seem a little complex to do on the actual user editing side of things. I'd love to see how to do this next week as its been a stretch goal for quite a few weeks
- I feel the multiplayer and singleplayer pages could also be dynamic but at the time of creation it was getting too complex to think about, dynamic pages going into dynamic so I remember making them both static just to make things a bit easier to think about
- finding a use for the redirect, I did try making it so it takes you to the bottom of the page but that didnt work.

## Resources

- Lots of Mannys demos and just asking google lots of questions!
- https://nextjs.org/docs/messages/sync-dynamic-apis - this is a small error I kept getting about my params even though they work anyway. I did follow exactly what it says but it actually broke my code when I did it so I just took it out, it works fine so have that nextjs
- https://refine.dev/blog/using-next-image/#introduction - learning about adding images
- https://nextjs.org/docs/app/getting-started/images - same
- https://nextjs.org/docs/app/guides/redirecting - learning about the redirect
- https://www.w3schools.com/css/css_grid.asp - bit of refresh with grid
- https://stackoverflow.com/questions/75045196/how-can-i-overlay-text-on-image-in-reactjs-nextjs-application - learning how to get text over a next.js image
- https://stackoverflow.com/questions/76923299/delete-button-requires-me-to-turn-server-component-to-client-component - learning about delete button in nextjs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find - initally I thought the filter command would work but it didnt so then I stumbled across this, and this allowed me to filter the worldID and preview true!
- https://nextjs.org/docs/pages/api-reference/components/image#priority - I was getting an error about image priority so this helped fix it
- https://www.nobledesktop.com/learn/sql/max-tutorial#:~:text=The%20MAX%20function%20in%20SQL%20is%20designed%20to%20identify%20the,MAX(column_1)%20FROM%20table.- was trying to just select the max date to display the latest post on the home page, this didnt work as it got my the date only, I then found a different way where i just order them by date and then only take the top one which worked out well
