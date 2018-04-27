# react-svg-components
A collection of UI/UX components that inject SVGs as icons. As well as some other useful compoents
I have created. 

## Icons

```
<Icons icon_name="react" static_url="" className="" />
```

Icons takes an `icon_name` and appends it to `static_url` which can be supplied via props or global variable in `document.STATIC_URL`

## IconOption, IconValue
Custom [React-Select](https://github.com/JedWatson/react-select) render compoenets
```
<Select
name="form-field-name"
value={this.sate.value}
valueComponent={IconValue}
onChange={this.handleChange.bind(this)}
options={this.state.options}
optionComponent={IconOption}
/>
```

## Example CSS Styles:
Since every aplpication is unique, I'll leve it to you to create your own styles but below are some examples.

```
.icon-svg{display: inline-block;width: 19px;height: 19px;position: relative;top: 0px;}
.icon-svg st0{fill: currentColor;}

.avatar{
  font-family: 'Roboto Mono',monospace;
  border-radius: 50%;
  border:1px solid #080B4E;
  background-color: #F7F7FB;
  color:#080B4E;
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 3px;
  font-size: 14pt;
  line-height: 1.2;
  width: 32.5px;
  }
  
.avatar .first-initial{display: inline-block;}
.avatar .last-initial{display: inline-block;}
.avatar-sm{
  padding: 2px 1px;
  font-size: 11pt;
  line-height: 1.2;
  width: 24px;
}


.input-group-clear{}
.input-group-clear .input-group-prepend{}
.input-group-clear .input-group-prepend .input-group-text{
  background: none;
  border: none;
  color: inherit;
  padding: 2px;
}
.input-group-clear input{
  border:none;
  color: inherit;
  padding: 2px;
}
.input-group-clear .input-group-append{
  color: inherit;
}
.input-group-clear .input-group-append .btn{
  padding: 0;
  color: inherit;
}
.input-group-text.input-group-clear{
  background: none;
    border: none;
    padding: 0;
    
}
.input-group-text.input-group-clear:last-child{
  margin-left: 12px !important;
}

.Select-option-label, .Select-value-label{display: flex;}
.Select-Icon{ margin-top: 4px; margin-right: 6px;}

```