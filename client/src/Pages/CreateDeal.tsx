import { ChangeEvent, FormEvent, useState } from "react";

type createDealType = {
  title: string;
  descreption: string;
  email: string;
  image: string;
};

function CreateDeal() {
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [dealInfo, setDealInfo] = useState<createDealType>(
    {} as createDealType
  );
  const handleCreateDeal = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", typeof e.target.value);
    console.log("e.target.name", typeof e.target.name);
    const file = e.target.files?.[0] || "";
    setSelectedFile(file);
    setDealInfo({ ...dealInfo, [e.target.name]: e.target.value });
  };

  const submitDeal = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("dealInfo", dealInfo);
    const token = localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const formdata = new FormData();
    formdata.append("title", dealInfo.title);
    formdata.append("descreption", dealInfo.descreption);
    formdata.append("email", dealInfo.email);
    formdata.append("image", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:5049/api/deal/create", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h3>Add the details of your deal:</h3>

      <form onSubmit={submitDeal}>
        <input
          type="text"
          id="title"
          name="title"
          value={dealInfo.title}
          onChange={handleCreateDeal}
        />
        <label>Title</label>
        <input
          type="text"
          id="descreption"
          name="descreption"
          value={dealInfo.descreption}
          onChange={handleCreateDeal}
        />
        <label>Descreption</label>
        <input
          id="email"
          name="email"
          value={dealInfo.email}
          onChange={handleCreateDeal}
        />
        <label>Contact email </label>
        <input
          type="file"
          //   id="newDeal"
          //   name="filename"
          //   value={dealInfo.image}
          onChange={handleCreateDeal}
        />
        <label>Upload Image</label>

        <button>Post a new deal</button>
      </form>
    </>
  );
}

export default CreateDeal;
