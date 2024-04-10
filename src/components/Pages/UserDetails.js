// import React from "react";
// import classes from './UserDetails.module.css';
// const UserDetails = () =>{
//     return(
//         <div className={classes.user}>
//             <h2>Contact Details</h2>
//             <div className={classes.user1}>
//             <label>Full Name</label>
//             <input type="text"/>
            
            
//                 <label>Profile Photo URL</label>
//                 <input type='url'/>
//             </div>
//             <button className={classes.button}>Update</button>
           
//         </div>
//     )
// };

// import React, { useState, useEffect } from "react";
// import { Form, Button, Alert } from "react-bootstrap";

// const UserDetails = ({ idToken }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [displayName, setDisplayName] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch user profile data when the component mounts
//     if (idToken) {
//       fetchUserProfile(idToken);
//     }
//   }, [idToken]);

//   const fetchUserProfile = (idToken) => {
//     // GET request to fetch the user's profile data
//     const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o`;

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({
//         idToken: idToken,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.users && data.users.length > 0) {
//           // Extract user data from the response
//           const user = data.users[0];
//           setDisplayName(data.users[0].displayName)
//           setPhotoUrl(data.users[0].photoUrl);
//           console.log(data);
//         //   setDisplayName(user.displayName || "");
//         //   setPhotoUrl(user.photoUrl || "");
//         } else {
//           setError("no user data found.");
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };


//   const handleUpdateProfile = () => {
//     fetch(
//       `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           idToken: idToken,
//           displayName: displayName,
//           photoUrl: photoUrl,
//           returnSecureToken: true,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           setError(data.error.message);
//         } else {
//           // Profile updated successfully
//           setIsEditing(false);
//           setDisplayName(data.displayName); 
//           setPhotoUrl(data.photoUrl);
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };
//   return (
//     <div>
//       {isEditing ? (
//         <Form>
//           <Form.Group>
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your full name"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Profile URL</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your profile URL"
//               value={photoUrl}
//               onChange={(e) => setPhotoUrl(e.target.value)}
//             />
//           </Form.Group>
//           <Button
//             variant="primary"
//             onClick={handleUpdateProfile}
//             className="mt-2"
//           >
//             Update
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() => setIsEditing(false)}
//             className="mt-2 ml-2"
//           >
//             Cancel
//           </Button>
//         </Form>
//       ) : (
//         <div>
//           <p>Your profile is incomplete</p>
//           <Button variant="primary" onClick={() => setIsEditing(true)}>
//             Complete Now
//           </Button>
//         </div>
//       )}
//       {error && <Alert variant="danger">{error}</Alert>}
//     </div>
//   );
// };
// export default UserDetails;
import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const UserDetails = ({ idToken }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch user profile data when the component mounts
  //   if (idToken) {
  //     fetchUserProfile(idToken);
  //   }
  // }, [idToken]);

  // const fetchUserProfile = (idToken) => {
  //   // GET request to fetch the user's profile data
  //   const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o`;

  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       idToken: idToken,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.users && data.users.length > 0) {
  //         // Extract user data from the response
  //         const user = data.users[0];
  //         setDisplayName(user.displayName || "");
  //         setPhotoUrl(user.photoUrl || "");
  //       } else {
  //         setError("No user data found.");
  //       }
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  
    // let url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o";
    const handleUpdateProfile = () => {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApkZTq4f1gVooTV5ykjGTHr5GugnKGM-o`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: idToken,
            displayName: displayName,
            photoUrl: photoUrl,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error.message);
          } else {
            // Profile updated successfully
            setIsEditing(false);
            setDisplayName(data.displayName); 
            setPhotoUrl(data.photoUrl);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    };
 

  return (
    <div>
      {isEditing ? (
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Profile URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your profile URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleUpdateProfile}
            className="mt-2"
          >
            Update
          </Button>
          <Button
            variant="danger"
            onClick={() => setIsEditing(false)}
            className="mt-2 ml-2"
          >
            Cancel
          </Button>
        </Form>
      ) : (
        <div>
          <p>Your profile is incomplete</p>
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Complete Now
          </Button>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default UserDetails;