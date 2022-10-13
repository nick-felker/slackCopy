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

export interface MessageInterface{
    message: string;
    chatId: string;
}

export interface ChatsInterface{
    messages: MessageInterface[];
    WorkSpaceId: string;
}

export interface WorkSpaceInterface{
    bgColor: string;
    name: string;
    selfId: string;
}