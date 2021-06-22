import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Contacts = (props) => {
  const [contacts, setContacts] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const history = useHistory();

  const getContacts = async (x) => {
    const response = await fetch('http://localhost:8080/api/contacts/');
    const data = await response.json();
    console.log(data);
    setContacts(data);
  };

  useEffect(() => {
    getContacts();
    // setLoaded(true);
  }, [loaded]);

  const updateRow = async (contact) => {
    history.push('/contact/' + contact.id);
  };
  const deleteRow = async (contact) => {
    const response = await fetch(
      'http://localhost:8080/api/contacts/id?id=' + contact.id,
      {
        method: 'DELETE',
      }
    );
    console.log(response);
    alert('contact ' + contact.id + ' deleted');
    setLoaded(!loaded);
  };
  const renderContacts = () => {
    return contacts.map((c, k) => {
      return (
        <tr key={k}>
          <td>{c.id}</td>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.phone}</td>
          <td>{c.message}</td>
          <td>
            <p onClick={() => deleteRow(c)}>Delete</p>
            <p onClick={() => updateRow(c)}>Update</p>
            {/* <Link to={'/contact/' + c.id}>Update</Link> */}
            {/* <p onClick={() => deleteRow(c)}>Update</p>{' '} */}
          </td>
        </tr>
      );
    });
  };
  return (
    <div className='page-section'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderContacts()}
          {/* <tr>
            <td>{contacts[0].phone}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default Contacts;
