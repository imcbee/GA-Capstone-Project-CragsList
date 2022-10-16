# GA-Capstone-Project-CragsList
---
 ```
                                  __                  __      
                                 /\ \      __        /\ \__   
  ___  _ __   __       __     ___\ \ \    /\_\    ___\ \ ,_\  
 /'___/\`'__/'__`\   /'_ `\  /',__\ \ \  _\/\ \  /',__\ \ \/  
/\ \__\ \ \/\ \L\.\_/\ \L\ \/\__, `\ \ \L\ \ \ \/\__, `\ \ \_ 
\ \____\ \_\ \__/.\_\ \____ \/\____/\ \____/\ \_\/\____/\ \__\
 \/____/\/_/\/__/\/_/\/___L\ \/___/  \/___/  \/_/\/___/  \/__/
                       /\____/                                
                       \_/__/  
        _    .  ,   .           .
    *  / \_ *  / \_      _  *        *   /\'__        *
      /    \  /    \,   ((        .    _/  /  \  *'.
 .   /\/\  /\/ :' __ \_  `          _^/  ^/    `--.
    /    \/  \  _/  \-'\      *    /.' ^_   \_   .'\  *
  /\  .-   `. \/     \ /==~=-=~=-=-;.  _/ \ -. `_/   \
 /  `-.__ ^   / .-'.--\ =-=~_=-=~=^/  _ `--./ .-'  `-
/jgs     `.  / /       `.~-^=-=~=^=.-'      '-._ `._
Art by Joan Stark
```

---
---
##### Table of Contents  
1. [Website Links](#websitelink)
2. [Project Description](#projectdescription)  
3. [Goals and Stretch Features](#goalsandstretchfeatures)  
4. [Wireframe](#wireframe)
5. [Example Pictures](#examplepictures)     
6. [Tech Stack](#techstack) 
7. [Coding Challenges](#codingchallenges)
8. [Summary](#summary)
9. [Future Goals](#futuregoals)
10. [Support](#support)

---                                   
### [Live Site](https://iridescent-madeleine-e8f6e2.netlify.app/)<a name="websitelink"></a>
### [Heroku Back-end Link](https://ga-capstone-cragslist.herokuapp.com/)
### [Link to Front-end Repo](https://github.com/imcbee/GA-Capstone-Project-CragsList-Front-end)<a name="websitelink"></a>
---

## Project Description:<a name="projectdescription"></a>
Welcome to CragsList!  This is my capstone project for General Assembly's Software Engineering Immersive program.  I love to climb as a hobby and my form of exercise and I sometimes share either pictures or videos of my climb on instagram as a way to track my progress.  I was inspired by apps like **Kaya** to help avid climbers show their progress in the form of a picture blog and text.  CragsList is a MERN app allowing users to create profiles, make climbing 'journal' posts and make comments on other user's journals.  The project was a little over a week sprint and there is more functionality I would like to add in the future.

## Goals and Stretch Features:<a name="goalsandstretchfeatures"></a>

### MVP Goals:
- Use MongoDB as a database
- CRUD functionality 
- MERN app with at least 2 models (journals, comments)
- Create a focused product with a clear objective
- Craft thoughtful user stories
- Error handling and useful feedback
- Impressive/Professional looking
- Deployed project (heroku and netlify)

### Stretch Goals:
- User Auth
- User index page
- Likes button and display likes
- Helpful comments

## Wireframe:<a name="wireframe"></a>
Wireframes were created using Figma, follow the link below to see more details.  
[Figma/Figjam Link](https://www.figma.com/file/sLaALmffReU7TuAs1zlc1d/GA-Capstone-Project---CragsList---Backend?node-id=2%3A181)

**Back-end Wireframe:**
![Screen Shot 2022-10-15 at 10 06 01 PM](https://user-images.githubusercontent.com/107007458/196014523-d750877d-4470-4071-98ad-963937eb5dd1.png)

**Front-end Wireframe:**
![Screen Shot 2022-10-15 at 10 11 13 PM](https://user-images.githubusercontent.com/107007458/196014611-a102b0d2-295e-4d9d-ac91-b96c01a18219.png)

## Example Site Pictures:<a name="examplepictures"></a>
![Screen Shot 2022-10-15 at 10 21 05 PM](https://user-images.githubusercontent.com/107007458/196014867-9aea24f9-8e7e-4e39-aa54-0cdf1a110d7a.png)

![Screen Shot 2022-10-15 at 10 22 40 PM](https://user-images.githubusercontent.com/107007458/196014898-3912f9e8-1dfd-45a9-88e1-ec902c326b5b.png)

## Tech Stack:<a name="techstack"></a>
### Node.js and Express.js:
Our Back-end was built using Node.js as the environment with Express as the web application framework.

### React.js:
React was used to create our Front-end pages and components. 

### Mongoose and MongoDB:
MongoDB was used as our Back-end database to hold information such as users, comments, usergroups, and player info. We were able to navigate this using the Mongoose interface.

### Postman:
Postman was used to test our controllers, routes and ensure that they were properly functioning.

### Bootstrap:
Bootstrap was used to for components, layouts, elements and styling.

### Bulma:
Bulma was used to for components, elements and styling.

## Coding Challenges:<a name="codingchallenges"></a>
### Back-end Challenges:

```js
// --------------------------Create Route----------------------------
router.post("/new", async (req, res, next) => {
  try {
    const newComment = await Comments.create(req.body);
    const journal = await Journal.findById(req.body.journal);
    journal.comments.push(newComment._id);
    journal.save();
    res.status(200).send("Successful!");
  } catch (error) {
    console.log(error);
    res.redirect("/404");
    res.status(400).json(error);
  }
});
```
Adding the comment id to the specific journal was difficult and I had to ask for help, but it was a great lesson to learn that the backend create comment route adds the id to the journal to create the relation. 

### Front-end Challenges:
```js
 //todo ---------------------------App--------------------------
  return (
    <div className="App">
      <Context.Provider
        value={{
          DB_URL,
          currentUser,
          isAuthenticated,
          registerUser,
          loginUser,
          getUserToken,
          clearUserToken,
          setUserToken,
          handleLogout,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/journal/new" element={<JournalCreate />}></Route>
          <Route path="/journal" element={<JournalIndex />}></Route>
          <Route path="/journal/:id" element={<JournalShow />}></Route>
          <Route path="/journal/:id/edit" element={<JournalEdit />}></Route>
          <Route
            path="/comments/:id/"
            element={<CommentEditandDelete />}
          ></Route>
          {/* <Route path="/comments/:id/" element={}></Route> */}
          <Route path="/user/login" element={<UserLogin />}></Route>
          <Route path="/user/register" element={<UserRegister />}></Route>
          {/* <Route path="/user/index" element={}></Route> */}
          <Route path="/*" element={<Route404 />}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}
```
In a previous project, I had trouble implementing user auth on the front-end because I was losing track of passing user auth variables as props. I learned that using useContext was a great way make important variables available globally in the React app.  With this, I was able to implement user auth.

## Summary:<a name="summary"></a>
Overall, I felt great having to accomplish the goals of this sprint project within a week.  However, there were user stories and functionality that I was not able to fully implement.  I was able to implement 3 different models including user auth.  But, I am very close in completing the back-end and front-end to establish a fully functional user auth.  Adjust the front-end forms and adding the user auth tokens in the backend was needed.  I also needed to establish routes in connecting the relationship for a certain to another.  I really wanted to implement a like button and a helpful/non-helpful comment system to give users the ability to vote for the best comment and display a "helpful" sign or symbol to the comment.  The website also needs more CSS and styling to make it more professional.  Really grateful for the past 3 months and the chance to learn how to code.  Looking forward to growing more and becoming a better coder!   


## Future Goals<a name="futuregoals"></a>
- Completely implement user auth 
- Establish like buttons and best comment system
- Better style the website
- Add another model for users to record climbing training workouts
- Add video for users to record video

## Contributions:  
Thank you friends and GA instructors for your tireless help!!!

## Support:  
Please [email](imcbee@terpmail.umd.edu) me for any issues, suggestions or support!

