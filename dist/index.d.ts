import type * as React from 'react';
type Node = React.ReactNode;
export interface ReportShellProps { meta?: string[]; footer?: Node; identity?: Node; mark?: Node; children?: Node }
export declare function ReportShell(props: ReportShellProps): React.ReactElement;
export interface MastheadProps { meta?: string[]; identity?: Node }
export declare function Masthead(props: MastheadProps): React.ReactElement;
export interface FooterProps { mark?: Node; children?: Node }
export declare function Footer(props: FooterProps): React.ReactElement;
export interface OpeningProps { claim: Node; lede?: Node; context?: Node; proof?: Node; display?: boolean }
export declare function Opening(props: OpeningProps): React.ReactElement;
export interface BandProps { inverse?: boolean; className?: string; children?: Node }
export declare function Band(props: BandProps): React.ReactElement;
export interface Stat { label: Node; value: Node; detail?: Node; lead?: boolean }
export interface StatStripProps { stats: Stat[] }
export declare function StatStrip(props: StatStripProps): React.ReactElement;
export interface BarRow { label: Node; value: number; display?: Node; lead?: boolean; reference?: boolean }
export interface BarListProps { rows: BarRow[]; max?: number; label?: string; caption?: Node }
export declare function BarList(props: BarListProps): React.ReactElement;
export interface Column { key: string; label: Node; numeric?: boolean }
export interface DataTableProps { caption?: Node; columns: Column[]; rows: Array<Record<string, any> & { highlight?: boolean }>; foot?: Record<string, any> }
export declare function DataTable(props: DataTableProps): React.ReactElement;
export interface Series { name: string; values: number[] }
export interface ChartProps { series: Series[]; xLabels: string[]; yMax?: number; yTicks?: number[]; unit?: string; title?: Node; caption?: Node; ariaLabel?: string }
export declare function Chart(props: ChartProps): React.ReactElement;
export interface ComparisonProps { items: Array<{ title: Node; body: Node }> }
export declare function Comparison(props: ComparisonProps): React.ReactElement;
export interface NoteProps { tone?: 'info' | 'warning' | 'error' | 'success'; title?: Node; children?: Node }
export declare function Note(props: NoteProps): React.ReactElement;
export interface SourcesProps { items: Array<{ label: Node; href?: string; detail?: Node }> }
export declare function Sources(props: SourcesProps): React.ReactElement;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { solid?: boolean; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> { id: string; label: Node; hint?: Node; error?: Node; prefix?: Node; suffix?: Node }
export declare function Field(props: FieldProps): React.ReactElement;
export interface Result { label: Node; value: Node; detail?: Node; lead?: boolean }
export interface CalculatorProps { inputs: Node; results: Result[]; formula?: Node }
export declare function Calculator(props: CalculatorProps): React.ReactElement;
declare global { interface Window { EvidenceUI: { ReportShell: typeof ReportShell; Masthead: typeof Masthead; Footer: typeof Footer; Opening: typeof Opening; Band: typeof Band; StatStrip: typeof StatStrip; BarList: typeof BarList; DataTable: typeof DataTable; Chart: typeof Chart; Comparison: typeof Comparison; Note: typeof Note; Sources: typeof Sources; Button: typeof Button; Field: typeof Field; Calculator: typeof Calculator } } }
