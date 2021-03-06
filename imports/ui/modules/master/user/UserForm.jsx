import React from 'react';
import { DataGrid, GridColumn, Form, Dialog, TextBox, Label, LinkButton, ButtonGroup } from 'rc-easyui';
import { Meteor } from 'meteor/meteor';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageSize: 100,
      data: [],
      pagePosition: "bottom",
      closed: true,
      model: {},
      errors: {},
      options: [
        { value: "bottom", text: "Bottom" },
        { value: "top", text: "Top" },
        { value: "both", text: "Both" }
      ],
      user: {
          _id            : null,
          user_name      : null,
          user_password  : null,
          user_alamat    : null,
          user_phone     : null
      }
    }

    this.getData();
  }

  getError(name) {
    const { errors } = this.state;
    return errors[name] && errors[name].length
      ? errors[name][0]
      : null;
  }

  getData() {
    var thisme = this;
    let data = [];
    Meteor.call('user_list', function (error, resultUser) {
        for (let i = 0; i < resultUser.length; i++) {
            data.push({
                no: i+1,
                _id            : resultUser[i]._id,
                user_name      : resultUser[i].user_name,
                user_password  : resultUser[i].user_password,
                user_alamat    : resultUser[i].user_alamat,
                user_phone     : resultUser[i].user_phone
            });
        }
        thisme.setState({data:data})
    })
  }

  handleChange(name, value) {
    let user = Object.assign({}, this.state.user);
    user[name] = value;
    this.setState({ user: user })
  }

  editRow(row) {
    this.setState({ user: row })
    this.setState({
      editingRow: row,
      model: Object.assign({}, row),
      title: 'Edit',
      closed: false
    });
  }

  deleteRow(row){
      var thisme = this;
      Meteor.call('user_delete', row._id, function (error, res) {
          if (res) {
              thisme.getData();
          }
      });
  }

  handleAdd() {
    this.setState({
      title: 'Add',
      closed: false,
      model : {}
    });
  }

  handleSubmit() {
      var action = this.state.title;
      var thisme = this;
      var datainsert = this.state.user;
      
      Meteor.call('user_insert', datainsert, action, function (error, res) {
          if (res) {
              thisme.getData()
              thisme.setState({
                title: 'Add',
                closed: true,
                model : {}
              });
          } else {
              console.log('failed');
          }
      });
  }

  renderDialog() {
    const row = this.state.model;
    const { user } = this.state;
    const { title, closed, rules } = this.state;
    return (
      <Dialog modal title={title} closed={closed} onClose={() => this.setState({ closed: true })}>
        <div className="f-full" style={{ padding: '20px 50px' }}>
          <Form className="f-full"
            ref={ref => this.form = ref}
            model={user}
            rules={rules}
            onChange={this.handleChange.bind(this)}
          >
            <div style={{ marginBottom: 5 }}>
              <TextBox inputId="_id" name="_id" value={row._id} style={{ display: 'none' }}></TextBox>
              <Label htmlFor="user_name">User name:</Label>
              <TextBox inputId="user_name" name="user_name" value={row.user_name} style={{ width: 220 }}></TextBox>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="user_password">Password:</Label>
              <TextBox inputId="user_password" name="user_password" value={row.user_password} style={{ width: 220 }}></TextBox>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="user_alamat">Alamat:</Label>
              <TextBox inputId="user_alamat" name="user_alamat" value={row.user_alamat} style={{ width: 220 }}></TextBox>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="user_phone">Phone:</Label>
              <TextBox inputId="user_phone" name="user_phone" value={row.user_phone} style={{ width: 220 }}></TextBox>
            </div>

          </Form>
        </div>
        <div className="dialog-button">
          <LinkButton style={{ width: 80 }} onClick={() => this.handleSubmit()}>Save</LinkButton>
          <LinkButton style={{ width: 80 }} onClick={() => this.setState({ closed: true, user : {} })}>Close</LinkButton>
        </div>
      </Dialog>
    )
  }

  handlePageChange() {
    var thisme = this;
    thisme.getData()
    Meteor.call('user_gridload');
  }

  render() {
    return (
      <div style={{ padding : 5 }}>
        <h2>Pagination</h2>
        <DataGrid
          style={{ height: 550 }}
          onPageChange={this.handlePageChange.bind(this)}
          pagination
          {...this.state}
          toolbar={({ editingItem }) => (
            <div style={{ padding: 4 }}>
              <LinkButton iconCls="icon-add" plain onClick={this.handleAdd.bind(this)}>Add</LinkButton>
            </div>
          )}
        >
          <GridColumn field="no" title="No" align="center" width={50}></GridColumn>
          <GridColumn field="user_name" title="Name"></GridColumn>
          <GridColumn field="user_password" title="Password"></GridColumn>
          <GridColumn field="user_alamat" title="Alamat"></GridColumn>
          <GridColumn field="user_phone" title="Phone"></GridColumn>
          <GridColumn field="act" title="Actions" align="center" width={110}
            render={({ row }) => (
              <div>
                <ButtonGroup>
                  <LinkButton onClick={() => this.editRow(row)}>Edit</LinkButton>
                  <LinkButton onClick={() => this.deleteRow(row)}>Delete</LinkButton>
                </ButtonGroup>
              </div>
            )}
          />
        </DataGrid>
        {this.renderDialog()}
      </div>
    );
  }
}

export default UserForm;
