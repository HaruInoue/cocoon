/**
 * Cocoon Blocks
 * @author: yhira
 * @link: https://wp-cocoon.com/
 * @license: http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 */

import { THEME_NAME, BadgeToolbarButton } from '../helpers.js';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { Icon, button } from '@wordpress/icons';
const FORMAT_TYPE_NAME = 'cocoon-blocks/inline-button-white-blue';
const TITLE = __( '青色', THEME_NAME );

registerFormatType( FORMAT_TYPE_NAME, {
  title: TITLE,
  tagName: 'span',
  className: 'inline-button-white-blue',
  edit( { isActive, value, onChange } ) {
    const onToggle = () =>
      onChange( toggleFormat( value, { type: FORMAT_TYPE_NAME } ) );

    return (
      <Fragment>
        <BadgeToolbarButton
          icon={ <Icon icon={ button } size={ 32 } /> }
          title={ <span className="inline-button-white-blue">{ TITLE }</span> }
          onClick={ onToggle }
          isActive={ isActive }
        />
      </Fragment>
    );
  },
} );
