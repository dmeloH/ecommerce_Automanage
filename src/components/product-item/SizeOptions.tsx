import React, { useEffect, useMemo, useState } from 'react'

interface SizeOptionsProps {
    categories: string[];
    subCategory: string;
}

interface SizeOption {
    value: string;
    tooltip: string;
}

const SizeOptions: React.FC<SizeOptionsProps> = ({ categories, subCategory }) => {
    const [options, setOptions] = useState<SizeOption[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const Categories: Record<string, Record<string, SizeOption[]>> = useMemo(() => ({
        clothes: {
            "Sistema de Combustible": [
                { value: '30 PSI', tooltip: 'Baja presión' },
                { value: '45 PSI', tooltip: 'Estándar' },
                { value: '60 PSI', tooltip: 'Alto rendimiento' },
                { value: '80 PSI', tooltip: 'Competencia' }
            ],
            "Neumáticos": [
                { value: '32 PSI', tooltip: 'Ciudad' },
                { value: '35 PSI', tooltip: 'Carretera' },
                { value: '40 PSI', tooltip: 'Carga' },
                { value: '50 PSI', tooltip: 'Industrial' }
            ],
            "Sistema de Aire Acondicionado": [
                { value: '25 PSI', tooltip: 'Baja' },
                { value: '40 PSI', tooltip: 'Media' },
                { value: '60 PSI', tooltip: 'Alta' },
                { value: '100 PSI', tooltip: 'Máxima' }
            ]
        },
        footwear: {
            "Suspensión Neumática": [
                { value: '50 PSI', tooltip: 'Confort' },
                { value: '75 PSI', tooltip: 'Mixto' },
                { value: '100 PSI', tooltip: 'Deportivo' },
                { value: '150 PSI', tooltip: 'Competencia' }
            ],
            "Frenos de Aire": [
                { value: '90 PSI', tooltip: 'Mínimo' },
                { value: '110 PSI', tooltip: 'Estándar' },
                { value: '130 PSI', tooltip: 'Alto rendimiento' },
                { value: '150 PSI', tooltip: 'Pesado' }
            ]
        },
        vegetables: {
            "Sistema de Turbo": [
                { value: '5 PSI', tooltip: 'Bajo boost' },
                { value: '10 PSI', tooltip: 'Street' },
                { value: '20 PSI', tooltip: 'Performance' },
                { value: '30+ PSI', tooltip: 'Racing' }
            ],
            "Refrigeración": [
                { value: '15 PSI', tooltip: 'Tapa estándar' },
                { value: '20 PSI', tooltip: 'Refuerzo' },
                { value: '25 PSI', tooltip: 'Alta presión' },
                { value: '30 PSI', tooltip: 'Extremo' }
            ]
        },
        accessorise: {
            "Compresores": [
                { value: '100 PSI', tooltip: 'Básico' },
                { value: '150 PSI', tooltip: 'Profesional' },
                { value: '200 PSI', tooltip: 'Industrial' },
                { value: '300 PSI', tooltip: 'Pesado' }
            ],
            "Herramientas Neumáticas": [
                { value: '90 PSI', tooltip: 'Ligero' },
                { value: '120 PSI', tooltip: 'Estándar' },
                { value: '150 PSI', tooltip: 'Pesado' },
                { value: '200 PSI', tooltip: 'Industrial' }
            ]
        }
    }), [])

    useEffect(() => {
        const allOptions: SizeOption[] = [];
        categories.forEach((category: string) => {
            const subCategoryOptions = Categories[category]?.[subCategory];
            if (subCategoryOptions) {
                allOptions.push(...subCategoryOptions);
            }
        });

        setOptions(allOptions);
    }, [categories, subCategory, Categories]);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            <ul className="gi-opt-size">
                {options.map((data: any, index) => (
                    <li key={index} onClick={() => handleClick(index)} className={activeIndex === index ? "active" : ""}>
                        <a className="gi-opt-sz" data-tooltip={data.tooltip}>
                            {data.value}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SizeOptions
