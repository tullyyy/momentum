import React, { Component } from "react";
import LinksList from "./LinksList";
import BuiltInLinks from "./BuiltInLinks";
import NewLinkButton from "./NewLinkButton";
import NewLink from "./NewLink";
import EditLink from "./EditLink";
import BeatLoad from "./BeatLoad";

class LinksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createLink: false,
            loading: false,
            itemToEdit: null,
            links: []
        };
    }

    handleNewLinkClicked = () => {
        this.setState({ createLink: true });
    };

    handleBackClicked = () => {
        this.setState({ createLink: false });
    };

    handleLinkSubmit = link => {
        let { links } = this.state;
        links.push(link);

        this.setState({
            createLink: false,
            links: links
        });

        fetch("/api/links", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(link)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    componentDidMount() {
        this.setState({ loading: true });
        fetch("/api/links")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    links: json,
                    loading: false
                });
            });
    }

    handleLinkEdit = id => {
        console.log("editing", id);
        this.setState({
            itemToEdit: id
        });
    };

    handleEditSubmit = (id, data) => {
        fetch("/api/links/" + id, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    deleteLink = id => {
        console.log("removing", id);
        this.setState({
            links: [
                ...this.state.links.filter(link => {
                    return link.id !== id;
                })
            ]
        });
        fetch("/api/links/" + id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    render() {
        let item = null;

        if (this.state.itemToEdit) {
            item = this.state.links.filter(
                link => link.id == this.state.itemToEdit
            )[0];
        }

        return (
            <div className="link-container">
                {this.state.createLink ? (
                    <NewLink
                        handleClick={this.handleBackClicked}
                        handleSubmit={this.handleLinkSubmit}
                    />
                ) : this.state.itemToEdit ? (
                    <EditLink
                        item={item}
                        handleEditSubmit={this.handleEditSubmit}
                    />
                ) : (
                    <>
                        <BuiltInLinks />
                        {this.state.loading ? (
                            <BeatLoad />
                        ) : (
                            <LinksList
                                links={this.state.links}
                                handleLinkEdit={this.handleLinkEdit}
                                deleteLink={this.deleteLink}
                            />
                        )}

                        <NewLinkButton
                            handleClick={this.handleNewLinkClicked}
                        />
                    </>
                )}
            </div>
        );
    }
}
export default LinksContainer;
