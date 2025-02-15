import React from "react";

function UserData({name, age, email , mob, city}) {
    return(
        <>
        <div>
            Name = {name}
        </div>
        <div>
            Age = {age}
        </div>
        <div>
            Email = {email}
        </div>
        <div>
            Mob. No. = {mob}
        </div>
        <div>
            City = {city}
        </div>
        </>
    )
}

export default UserData;