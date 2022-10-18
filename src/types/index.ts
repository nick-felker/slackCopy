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

export interface ChatsInterface{
    messages: MessageInterface[];
    WorkSpaceId: string;
}

export interface WorkSpaceInterface{
    bgColor: string;
    name: string;
    selfId: string;
}


interface ChannelArrayInterface{
    workspaceId: string;
    name: string;
    channelId: string;
}

export interface ChannelInterface{
    createNewChannelModalWindowFlag: boolean;
    channelArray: ChannelArrayInterface[];
    activeChannelId: string;
}


interface MessageInterface{
    author: string;
    channelId: string;
    message: string;
}

export interface MessageArrayInterface{
    messagesArray: MessageInterface[];
}