import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import InvoiceLineGridBuild from './InvoiceLineGrid.build';
import config, { type IInvoiceLineGridProps } from './InvoiceLineGrid.config';
import InvoiceLineGridRender from './InvoiceLineGrid.render';

const InvoiceLineGrid: T4DComponent<IInvoiceLineGridProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <InvoiceLineGridBuild {...props} /> : <InvoiceLineGridRender {...props} />;
};

InvoiceLineGrid.craft = config.craft;
InvoiceLineGrid.info = config.info;
InvoiceLineGrid.defaultProps = config.defaultProps;

export default InvoiceLineGrid;
