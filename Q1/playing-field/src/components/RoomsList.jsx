import React from "react";
class RoomsList extends React.Component {
  render() {
    let rooms = [
      { room_type: "Queen", vacant_rooms: 5, price: 100 },
      { room_type: "Double", vacant_rooms: 3, price: 75 },
      { room_type: "Twin", vacant_rooms: 8, price: 60 },
    ];

    let roomDetailList = [];
    rooms.forEach((r) => {
      roomDetailList.push(
        <li>
          {r.room_type}, {r.price},{r.vacant_rooms}
        </li>
      );
    });
    return (
      <div>
        <ol>{roomDetailList}</ol>
      </div>
    );
  }
}

export default RoomsList;
