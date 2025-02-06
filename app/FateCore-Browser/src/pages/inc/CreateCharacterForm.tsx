function CreateCharacterForm ()  {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Name <input name="name" defaultValue="John Doe" />
      </label>
      <label>
      pronouns <input name="pronouns" defaultValue="John Doe" />
      </label>
      <label>
      description <input name="description" defaultValue="John Doe" />
      </label>
      <label>
        Aspect 1 <input name="Aspect1" defaultValue="John Doe" />
      </label>
      <label>
      Aspect 2 <input name="Aspect2" defaultValue="John Doe" />
      </label>
      <label>
      Aspect 3 <input name="Aspect3" defaultValue="John Doe" />
      </label>
      <label>
      Aspect 4 <input name="Aspect4" defaultValue="John Doe" />
      </label>
      <label>
      Aspect 5 <input name="Aspect5" defaultValue="John Doe" />
      </label>
      <hr />
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default CreateCharacterForm