import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiRail',
  props: {
    dividing: Boolean,
    position: Enum(['left', 'right']),
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', this.dividing && 'dividing', this.position, 'rail')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
