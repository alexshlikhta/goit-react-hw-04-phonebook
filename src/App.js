import "./App.scss";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Container from "./components/Container";

export default function App() {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem("contacts")) ?? []
  });

  const [filter, setFilter] = useState('');

  const handleSubmit = (state) => {
    if (
      !contacts.filter(
        (el) => el.name.toLowerCase() === state.name.toLowerCase()
      ).length > 0
    ) {
      setContacts( contacts => [
        ...contacts, { name: state.name, number: state.number, id: nanoid() }
      ]);

    } else {
      alert(`${state.name} is already in contacts`);
    }
  };

  const handleDeleteItem = (id) => {
    setContacts([...contacts.filter((contact) => contact.id !== id)]);
  };

  const searchContact = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  return (
    <>
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={handleSubmit} />
      </Container>

      <Container>
        <h1>Contacts</h1>

        <Filter filter={filter} onChange={searchContact} />

        <ContactList
          filteredContacts={filteredContacts()}
          handleClick={handleDeleteItem}
        />
      </Container>
    </>
  );
};