const data = {
  folders: {
    0: {
      name: "Inbox",
      id: 0,
    },
    1: {
      name: "Sent",
      id: 1,
    },
    2: {
      name: "Spam",
      id: 2,
    }
  },
  messages: {
    0: {
      id: 0,
      subject: "This is subject 0",
      body: "This is the body of an email starting with subject 0",
      from: "John Doe",
      to: "Rich G",
      folderId: 0,
    },
    1: {
      id: 1,
      subject: "This is subject 1",
      body: "This is the body of an email starting with subject 1",
      from: "Jane Smith",
      to: "Rich G",
      folderId: 0,
    },
    2: {
      id: 2,
      subject: "This is subject 2",
      body: "This is the body of an email starting with subject 2",
      from: "Rich G",
      to: "Laura Wend",
      folderId: 1,
    },
    3: {
      id: 3,
      subject: "This is subject 3",
      body: "This is the body of an email starting with subject 3",
      from: "Rich G",
      to: "Jessica Corday",
      folderId: 1,
    },
  }
}

export default data;
