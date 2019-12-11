import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
                <div>
                    <img src='https://s1.1zoom.me/big0/994/260356-svetik.jpg'></img>
                </div>
                <div>
                    ava + description
                </div>
                <div className={classes.posts}> 
                    My posts
                    <div className={classes.item}>
                        New post
                    </div>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
             </div>
}

export default Profile;