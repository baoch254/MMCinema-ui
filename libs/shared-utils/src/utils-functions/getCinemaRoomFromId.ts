import {cinemaRooms, CinemaRoomType} from '@mmcinema-ui/shared-common'

const getCinemaRoomFromId = (branchName : string, cinemaRoomId : number) : CinemaRoomType | undefined => {
  const cinemaBranchRooms = cinemaRooms.find(
    (branch) => branch.branchName === branchName
  );

  return cinemaBranchRooms?.rooms.find(
    (room) => room.roomId === cinemaRoomId
  );
};

export default getCinemaRoomFromId;
