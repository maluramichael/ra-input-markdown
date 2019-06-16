import React, {Component} from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import { addField } from 'ra-core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import 'react-mde/lib/styles/css/react-mde-all.css';

const styles = {};

class MarkdownInput extends Component {
  static propTypes = {
    input: PropTypes.object,
    source: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tab: 'write'
    };
  }

  componentDidMount() {
    const {
      input: {value}
    } = this.props;

    this.setState({value});

    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
  }

  handleValueChange(value) {
    this.setState({value});
    this.props.input.onChange(value);
  };

  handleTabChange(tab) {
    this.setState({tab});
  };

  render() {
    return (
      <FormControl fullWidth={true} className='ra-input-mde'>
        <ReactMde
          onChange={value=>this.handleValueChange(value)}
          onTabChange={tab=>this.handleTabChange(tab)}
          value={this.state.value}
          generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
          selectedTab={this.state.tab}/>
      </FormControl>
    );
  }
}


const MarkDownInputWithField = addField(withStyles(styles)(MarkdownInput));

MarkDownInputWithField.defaultProps = {
  addLabel: true,
  fullWidth: true,
};
export default MarkDownInputWithField;
