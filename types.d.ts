interface Report {
    id: number;
    user: User;
    location: string;
    condition: string;
    description: string;
    timestamp: string;
    imageUrl: string;
    body: string;
    type: string;
    url: string;
    toJson: () => string;
}
  
  interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: Role[];
  }
  
  interface Role {
    id: number;
    name: string;
  }
  