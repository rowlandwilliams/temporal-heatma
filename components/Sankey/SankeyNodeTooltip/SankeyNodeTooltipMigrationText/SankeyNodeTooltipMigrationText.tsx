interface Props {
    direction: string;
    provinceName: string;
}

export const SankeyNodeTooltipMigrationText = ({ direction, provinceName }: Props) => {
    return (
        <div>
            <div>
                MIGRATED {direction}{' '}
                <span className="text-gray-700">{provinceName && provinceName.toUpperCase()}</span>
            </div>
            <div>BETWEEN 2005 AND 2010</div>
        </div>
    );
};
