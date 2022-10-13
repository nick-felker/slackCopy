export interface UserInterface{
    authFlag: boolean;
    username: string;
    password: string;
    email: string;
    editUserInfoFlag: boolean;
}
export interface EnvironmentInterface{
    createNewWorkSpaceFlag: boolean;
}

export interface MessagesInterface{
    message: string;
    chatId: string;
}

export interface ChatsInterface{
    messages: MessagesInterface[];
    WorkSpaceId: string;
}

export interface WorkSpaceInterface{
    chats: ChatsInterface[];
    selfId: string;
}