import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IInvoiceLineGridProps } from './InvoiceLineGrid.config';
import { MOCK_LINES } from './InvoiceLineGrid.utils';
import InvoiceLineGridView from './InvoiceLineGridView';

const InvoiceLineGridBuild: FC<IInvoiceLineGridProps> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <InvoiceLineGridView
        lines={MOCK_LINES}
        currency={merged.currency ?? ''}
        locale={merged.locale ?? 'fr-FR'}
        accentColor={merged.accentColor ?? '#6E56CF'}
        surfaceColor={merged.surfaceColor ?? '#FFFFFF'}
        textColor={merged.textColor ?? '#23202E'}
        mutedColor={merged.mutedColor ?? '#6F6B7D'}
        cornerRadius={merged.cornerRadius ?? 16}
        density={merged.density ?? 'comfortable'}
        categoryColors={merged.categoryColors}
        showSummary={merged.showSummary ?? true}
        showChart={merged.showChart ?? true}
        showQuantityRing={merged.showQuantityRing ?? true}
        showCategoryChips={merged.showCategoryChips ?? true}
        interactive={false}
      />
    </div>
  );
};

export default InvoiceLineGridBuild;
